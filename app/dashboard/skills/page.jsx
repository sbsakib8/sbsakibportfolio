import CrudTable from '../components/CrudTable';

export default function SkillsPage() {
  const columns = [
    { key: 'name', label: 'Skill Name', type: 'text' },
    { key: 'level', label: 'Proficiency Level (0-100)', type: 'number' },
    { key: 'icon', label: 'Lucide Icon Name', type: 'text', required: false },
    { key: 'color', label: 'Gradient Color (Tailwind)', type: 'text', required: false },
  ];

  return <CrudTable title="Manage Skills" modelName="skills" columns={columns} />;
}
