'use client';

import { Tile, ProgressIndicator, ProgressStep } from '@carbon/react';
import { Checkmark, InProgress, Locked } from '@carbon/icons-react';
import { Phase } from '@/types';

interface PhaseProgressProps {
  currentPhase: Phase;
  progress: number;
}

const phases = [
  {
    id: Phase.STRATEGIST,
    label: 'Estrategista',
    description: 'Definição de estratégia e escopo',
  },
  {
    id: Phase.RESEARCHER,
    label: 'Pesquisador',
    description: 'Pesquisa e análise de usuários',
  },
  {
    id: Phase.ARCHITECT,
    label: 'Arquiteto',
    description: 'Arquitetura de informação',
  },
  {
    id: Phase.VISUAL,
    label: 'Visual',
    description: 'Design visual e identidade',
  },
  {
    id: Phase.VALIDATOR,
    label: 'Validador',
    description: 'Testes e validação',
  },
];

export default function PhaseProgress({ currentPhase, progress }: PhaseProgressProps) {
  const getPhaseStatus = (phaseId: Phase) => {
    if (phaseId < currentPhase) return 'complete';
    if (phaseId === currentPhase) return 'current';
    return 'incomplete';
  };

  const getPhaseIcon = (phaseId: Phase) => {
    const status = getPhaseStatus(phaseId);
    if (status === 'complete') return <Checkmark size={20} />;
    if (status === 'current') return <InProgress size={20} />;
    return <Locked size={20} />;
  };

  return (
    <Tile style={{ padding: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>
        Fases do Projeto
      </h3>

      <ProgressIndicator currentIndex={currentPhase} spaceEqually>
        {phases.map((phase) => (
          <ProgressStep
            key={phase.id}
            label={phase.label}
            description={phase.description}
            complete={phase.id < currentPhase}
            current={phase.id === currentPhase}
            disabled={phase.id > currentPhase}
          />
        ))}
      </ProgressIndicator>

      {/* Phase Details */}
      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {phases.map((phase) => {
          const status = getPhaseStatus(phase.id);
          const isComplete = status === 'complete';
          const isCurrent = status === 'current';
          
          return (
            <div
              key={phase.id}
              style={{
                padding: '1rem',
                background: isCurrent ? 'var(--cds-layer-accent)' : 'var(--cds-layer-01)',
                border: isCurrent ? '2px solid var(--cds-border-interactive)' : '1px solid var(--cds-border-subtle)',
                borderRadius: '4px',
                opacity: status === 'incomplete' ? 0.6 : 1,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ color: isComplete ? 'var(--cds-support-success)' : isCurrent ? 'var(--cds-link-primary)' : 'var(--cds-text-secondary)' }}>
                  {getPhaseIcon(phase.id)}
                </div>
                <strong style={{ fontSize: '0.875rem' }}>{phase.label}</strong>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--cds-text-secondary)', margin: 0 }}>
                {phase.description}
              </p>
              {isCurrent && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--cds-link-primary)', fontWeight: 600 }}>
                  Em andamento
                </div>
              )}
              {isComplete && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--cds-support-success)', fontWeight: 600 }}>
                  Concluída
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Tile>
  );
}

// Made with Bob
