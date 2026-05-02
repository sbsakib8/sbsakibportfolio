import CrudTable from '../components/CrudTable';

export default function EducationPage() {
  const columns = [
    { key: 'degree', label: 'Degree / Certificate', type: 'text' },
    { key: 'institution', label: 'Institution', type: 'text' },
    { key: 'period', label: 'Period', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'color', label: 'Gradient Color (Tailwind)', type: 'text', required: false },
  ];

  return <CrudTable title="Manage Education" modelName="education" columns={columns} />;
}
