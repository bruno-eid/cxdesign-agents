'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Building2,
  Users,
  Settings,
  FileCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    id: 1,
    label: 'Informações Básicas',
    description: 'Nome e descrição do projeto',
    icon: Sparkles,
  },
  {
    id: 2,
    label: 'Cliente',
    description: 'Dados do cliente',
    icon: Building2,
  },
  {
    id: 3,
    label: 'Equipe',
    description: 'Membros da equipe',
    icon: Users,
  },
  {
    id: 4,
    label: 'Configurações',
    description: 'Tags e configurações',
    icon: Settings,
  },
  {
    id: 5,
    label: 'Revisão',
    description: 'Confirme os dados',
    icon: FileCheck,
  },
];

export default function NewProjectPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    client: '',
    clientContact: '',
    team: '',
    tags: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    console.log('Criando projeto:', formData);

    // Simular criação
    setTimeout(() => {
      router.push('/projects');
    }, 1500);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== '' && formData.description.trim() !== '';
      case 2:
        return formData.client.trim() !== '';
      case 3:
      case 4:
      case 5:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Novo Projeto</h1>
        <p className="text-muted-foreground mt-2">
          Crie um novo projeto de Customer Experience em 5 passos simples
        </p>
      </div>

      {/* Stepper */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all
                        ${
                          isCompleted
                            ? 'bg-primary border-primary text-primary-foreground'
                            : isCurrent
                            ? 'bg-primary/10 border-primary text-primary'
                            : 'bg-background border-muted-foreground/30 text-muted-foreground'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <Check className="h-6 w-6" />
                      ) : (
                        <Icon className="h-6 w-6" />
                      )}
                    </div>
                    <div className="mt-2 text-center hidden md:block">
                      <p
                        className={`text-sm font-medium ${
                          isCurrent ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`
                        flex-1 h-0.5 mx-2 transition-all
                        ${isCompleted ? 'bg-primary' : 'bg-muted-foreground/30'}
                      `}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Form Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {steps[currentStep - 1].icon &&
              (() => {
                const Icon = steps[currentStep - 1].icon;
                return <Icon className="h-5 w-5" />;
              })()}
            {steps[currentStep - 1].label}
          </CardTitle>
          <CardDescription>{steps[currentStep - 1].description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Informações Básicas */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Nome do Projeto <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Ex: Redesign do App Mobile"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">
                  Descrição <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Descreva o objetivo e escopo do projeto..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={5}
                />
                <p className="text-sm text-muted-foreground">
                  Seja claro e objetivo sobre os objetivos do projeto
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Cliente */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client">
                  Nome do Cliente <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="client"
                  placeholder="Ex: Sicoob"
                  value={formData.client}
                  onChange={(e) => handleInputChange('client', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientContact">Contato do Cliente</Label>
                <Input
                  id="clientContact"
                  type="email"
                  placeholder="Ex: contato@cliente.com"
                  value={formData.clientContact}
                  onChange={(e) => handleInputChange('clientContact', e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Email principal para comunicação com o cliente
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Equipe */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="team">Membros da Equipe</Label>
                <Textarea
                  id="team"
                  placeholder="Digite os nomes separados por vírgula&#10;Ex: João Silva, Maria Santos, Pedro Costa"
                  value={formData.team}
                  onChange={(e) => handleInputChange('team', e.target.value)}
                  rows={5}
                />
                <p className="text-sm text-muted-foreground">
                  Você pode adicionar ou remover membros depois
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Dica:</strong> Adicione os principais stakeholders e membros da
                  equipe que terão acesso ao projeto
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Configurações */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="Ex: mobile, banking, ux"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Separe as tags por vírgula para facilitar a organização
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Dica:</strong> Use tags para categorizar e filtrar projetos
                  facilmente
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Revisão */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6 space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    INFORMAÇÕES BÁSICAS
                  </h4>
                  <div className="space-y-1">
                    <p className="font-medium">{formData.name}</p>
                    <p className="text-sm text-muted-foreground">{formData.description}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">CLIENTE</h4>
                  <div className="space-y-1">
                    <p className="font-medium">{formData.client}</p>
                    {formData.clientContact && (
                      <p className="text-sm text-muted-foreground">{formData.clientContact}</p>
                    )}
                  </div>
                </div>

                {formData.team && (
                  <>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">EQUIPE</h4>
                      <p className="text-sm">{formData.team}</p>
                    </div>
                  </>
                )}

                {formData.tags && (
                  <>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">TAGS</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.split(',').map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag.trim()}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="rounded-lg bg-primary/10 border border-primary/20 p-4">
                <p className="text-sm">
                  <strong>✨ Próximos passos:</strong> Após criar o projeto, os agentes de IA
                  começarão a trabalhar automaticamente nas fases de Estratégia, Pesquisa,
                  Arquitetura, Visual e Validação.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1 || isSubmitting}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Passo {currentStep} de {steps.length}
          </span>
        </div>

        {currentStep < steps.length ? (
          <Button onClick={handleNext} disabled={!isStepValid()} className="gap-2">
            Próximo
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={isSubmitting} className="gap-2">
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Criando...
              </>
            ) : (
              <>
                <Check className="h-4 w-4" />
                Criar Projeto
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

// Made with Bob
