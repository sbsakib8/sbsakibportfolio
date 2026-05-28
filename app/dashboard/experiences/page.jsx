import CrudTable from '../components/CrudTable';

export default function ExperiencesPage() {
  const columns = [
    { key: 'title', label: 'Job Title', type: 'text' },
    { key: 'company', label: 'Company', type: 'text' },
    { key: 'period', label: 'Period (e.g., 2021-2023)', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'achievements', label: 'Achievements (comma separated)', type: 'array', required: false },
    { key: 'color', label: 'Gradient Color (Tailwind)', type: 'text', required: false },
  ];

  return <CrudTable title="Manage Experiences" modelName="experiences" columns={columns} />;
}
