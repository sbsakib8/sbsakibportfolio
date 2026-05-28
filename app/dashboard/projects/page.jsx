import CrudTable from '../components/CrudTable';

export default function ProjectsPage() {
  const columns = [
    { key: 'title', label: 'Project Title', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'techStack', label: 'Tech Stack (comma separated)', type: 'array' },
    { key: 'imageUrl', label: 'Image URL', type: 'text', required: false },
    { key: 'liveUrl', label: 'Live URL', type: 'text', required: false },
    { key: 'githubUrl', label: 'GitHub URL', type: 'text', required: false },
  ];

  return <CrudTable title="Manage Projects" modelName="projects" columns={columns} />;
}
