'use client';

import { Tile, Tag, ProgressBar, Button } from '@carbon/react';
import { ArrowRight, User } from '@carbon/icons-react';
import Link from 'next/link';
import { Project, ProjectStatus } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<ProjectStatus, string> = {
  [ProjectStatus.DRAFT]: 'gray',
  [ProjectStatus.ACTIVE]: 'blue',
  [ProjectStatus.PAUSED]: 'yellow',
  [ProjectStatus.COMPLETED]: 'green',
  [ProjectStatus.ARCHIVED]: 'cool-gray',
};

const statusLabels: Record<ProjectStatus, string> = {
  [ProjectStatus.DRAFT]: 'Rascunho',
  [ProjectStatus.ACTIVE]: 'Ativo',
  [ProjectStatus.PAUSED]: 'Pausado',
  [ProjectStatus.COMPLETED]: 'Concluído',
  [ProjectStatus.ARCHIVED]: 'Arquivado',
};

const phaseLabels = [
  'Estrategista',
  'Pesquisador',
  'Arquiteto',
  'Visual',
  'Validador',
];

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Tile
      style={{
        padding: '1.5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.2s ease',
      }}
      className="card"
    >
      {/* Header */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
            {project.name}
          </h3>
          <Tag type={statusColors[project.status] as any} size="sm">
            {statusLabels[project.status]}
          </Tag>
        </div>
        <p style={{ color: 'var(--cds-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
          {project.client}
        </p>
      </div>

      {/* Description */}
      <p
        style={{
          color: 'var(--cds-text-secondary)',
          fontSize: '0.875rem',
          marginBottom: '1rem',
          flex: 1,
          lineHeight: 1.5,
        }}
      >
        {project.description}
      </p>

      {/* Phase */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--cds-text-secondary)' }}>
            Fase Atual
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>
            {phaseLabels[project.currentPhase]}
          </span>
        </div>
        <ProgressBar
          label=""
          value={project.progress}
          max={100}
          size="small"
        />
      </div>

      {/* Team */}
      {project.team && project.team.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--cds-text-secondary)' }}>
            <User size={16} />
            <span>{project.team.length} {project.team.length === 1 ? 'membro' : 'membros'}</span>
          </div>
        </div>
      )}

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} type="outline" size="sm">
              {tag}
            </Tag>
          ))}
          {project.tags.length > 3 && (
            <Tag type="outline" size="sm">
              +{project.tags.length - 3}
            </Tag>
          )}
        </div>
      )}

      {/* Action */}
      <Link href={`/projects/${project.id}`} style={{ marginTop: 'auto' }}>
        <Button
          kind="tertiary"
          size="sm"
          renderIcon={ArrowRight}
          style={{ width: '100%' }}
        >
          Ver Detalhes
        </Button>
      </Link>
    </Tile>
  );
}

// Made with Bob
