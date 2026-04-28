'use client';

import { useState } from 'react';
import {
  Modal,
  TextArea,
  Button,
  RadioButtonGroup,
  RadioButton,
} from '@carbon/react';
import { Checkmark, Close } from '@carbon/icons-react';
import { Gateway, GatewayStatus } from '@/types';

interface GatewayApprovalProps {
  gateway: Gateway;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (comments: string) => void;
  onReject: (comments: string) => void;
}

export default function GatewayApproval({
  gateway,
  isOpen,
  onClose,
  onApprove,
  onReject,
}: GatewayApprovalProps) {
  const [decision, setDecision] = useState<'approve' | 'reject'>('approve');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    if (decision === 'approve') {
      onApprove(comments);
    } else {
      onReject(comments);
    }
    setComments('');
    onClose();
  };

  const getStatusColor = (status: GatewayStatus) => {
    switch (status) {
      case GatewayStatus.APPROVED:
        return 'var(--cds-support-success)';
      case GatewayStatus.REJECTED:
        return 'var(--cds-support-error)';
      default:
        return 'var(--cds-text-secondary)';
    }
  };

  const getStatusLabel = (status: GatewayStatus) => {
    switch (status) {
      case GatewayStatus.APPROVED:
        return 'Aprovado';
      case GatewayStatus.REJECTED:
        return 'Rejeitado';
      default:
        return 'Pendente';
    }
  };

  return (
    <Modal
      open={isOpen}
      onRequestClose={onClose}
      modalHeading={gateway.name}
      primaryButtonText={decision === 'approve' ? 'Aprovar' : 'Rejeitar'}
      secondaryButtonText="Cancelar"
      onRequestSubmit={handleSubmit}
      size="md"
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--cds-text-secondary)', marginBottom: '1rem' }}>
          {gateway.description}
        </p>

        {gateway.status !== GatewayStatus.PENDING && (
          <div
            style={{
              padding: '1rem',
              background: 'var(--cds-layer-01)',
              borderRadius: '4px',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <strong>Status:</strong>
              <span style={{ color: getStatusColor(gateway.status) }}>
                {getStatusLabel(gateway.status)}
              </span>
            </div>
            {gateway.approvedBy && (
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Aprovado por:</strong> {gateway.approvedBy}
              </div>
            )}
            {gateway.approvedAt && (
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Data:</strong>{' '}
                {new Date(gateway.approvedAt).toLocaleString('pt-BR')}
              </div>
            )}
            {gateway.comments && (
              <div>
                <strong>Comentários:</strong>
                <p style={{ marginTop: '0.5rem', color: 'var(--cds-text-secondary)' }}>
                  {gateway.comments}
                </p>
              </div>
            )}
          </div>
        )}

        {gateway.status === GatewayStatus.PENDING && (
          <>
            <RadioButtonGroup
              legendText="Decisão"
              name="decision"
              valueSelected={decision}
              onChange={(value) => setDecision(value as 'approve' | 'reject')}
              style={{ marginBottom: '1.5rem' }}
            >
              <RadioButton
                labelText="Aprovar"
                value="approve"
                id="approve"
              />
              <RadioButton
                labelText="Rejeitar"
                value="reject"
                id="reject"
              />
            </RadioButtonGroup>

            <TextArea
              id="comments"
              labelText="Comentários"
              placeholder="Adicione seus comentários sobre esta decisão..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
            />
          </>
        )}
      </div>
    </Modal>
  );
}

// Made with Bob
