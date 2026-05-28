import CrudTable from '../components/CrudTable';

export default function ServicesPage() {
  const columns = [
    { key: 'title', label: 'Service Title', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'icon', label: 'Lucide Icon Name', type: 'text', required: false },
    { key: 'color', label: 'Gradient Color (Tailwind)', type: 'text', required: false },
  ];

  return <CrudTable title="Manage Services" modelName="services" columns={columns} />;
}
