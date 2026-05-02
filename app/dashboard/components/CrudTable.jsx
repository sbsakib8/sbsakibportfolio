"use client";

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Save, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CrudTable({ title, modelName, columns }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/data/${modelName}`);
      const json = await res.json();
      if (json.success) setData(json.data);
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [modelName]);

  const handleOpenModal = (item = null) => {
    setEditingItem(item);
    if (item) {
      setFormData(item);
    } else {
      const emptyForm = {};
      columns.forEach(c => emptyForm[c.key] = c.type === 'array' ? '' : '');
      setFormData(emptyForm);
    }
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const res = await fetch(`/api/data/${modelName}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Deleted successfully');
        fetchData();
      }
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    // Process array fields
    const processedData = { ...formData };
    columns.forEach(c => {
      if (c.type === 'array' && typeof processedData[c.key] === 'string') {
        processedData[c.key] = processedData[c.key].split(',').map(s => s.trim()).filter(Boolean);
      }
    });

    try {
      const url = editingItem ? `/api/data/${modelName}/${editingItem._id}` : `/api/data/${modelName}`;
      const method = editingItem ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(processedData),
      });

      if (res.ok) {
        toast.success(`Successfully ${editingItem ? 'updated' : 'added'}`);
        setIsModalOpen(false);
        fetchData();
      } else {
        toast.error('Failed to save');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-4 py-2 rounded-lg transition-all shadow-lg shadow-cyan-500/25"
        >
          <Plus className="w-4 h-4" />
          <span>Add New</span>
        </button>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center p-12">
            <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/80 border-b border-slate-700">
                  {columns.map(col => (
                    <th key={col.key} className="p-4 text-sm font-semibold text-gray-300">{col.label}</th>
                  ))}
                  <th className="p-4 text-sm font-semibold text-gray-300 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length + 1} className="p-8 text-center text-gray-500">
                      No data found. Click 'Add New' to create one.
                    </td>
                  </tr>
                ) : (
                  data.map(item => (
                    <tr key={item._id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                      {columns.map(col => (
                        <td key={col.key} className="p-4 text-sm text-gray-300">
                          {col.type === 'array' ? 
                            (Array.isArray(item[col.key]) ? item[col.key].join(', ').substring(0, 30) + '...' : '') :
                            (String(item[col.key] || '').substring(0, 50) + (String(item[col.key] || '').length > 50 ? '...' : ''))
                          }
                        </td>
                      ))}
                      <td className="p-4 flex justify-end space-x-2">
                        <button onClick={() => handleOpenModal(item)} className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(item._id)} className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h3 className="text-xl font-bold text-white">{editingItem ? 'Edit' : 'Add'} {title}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <form id="crud-form" onSubmit={handleSave} className="space-y-4">
                {columns.map(col => (
                  <div key={col.key}>
                    <label className="block text-sm font-medium text-gray-300 mb-1">{col.label}</label>
                    {col.type === 'textarea' ? (
                      <textarea
                        required={col.required !== false}
                        value={formData[col.key] || ''}
                        onChange={(e) => setFormData({...formData, [col.key]: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all h-24 resize-y"
                      />
                    ) : col.type === 'number' ? (
                      <input
                        type="number"
                        required={col.required !== false}
                        value={formData[col.key] || ''}
                        onChange={(e) => setFormData({...formData, [col.key]: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    ) : (
                      <input
                        type="text"
                        required={col.required !== false}
                        value={col.type === 'array' && Array.isArray(formData[col.key]) ? formData[col.key].join(', ') : (formData[col.key] || '')}
                        onChange={(e) => setFormData({...formData, [col.key]: e.target.value})}
                        placeholder={col.type === 'array' ? 'Comma separated values...' : ''}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    )}
                  </div>
                ))}
              </form>
            </div>
            
            <div className="p-6 border-t border-slate-700 flex justify-end space-x-3 bg-slate-800/50">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                form="crud-form"
                type="submit"
                disabled={saving}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2 rounded-lg transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
