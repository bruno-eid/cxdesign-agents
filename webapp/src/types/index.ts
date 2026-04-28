// Tipos principais da aplicação

export interface Project {
  id: string;
  name: string;
  description: string;
  client: string;
  status: ProjectStatus;
  currentPhase: Phase;
  createdAt: string;
  updatedAt: string;
  progress: number;
  team: string[];
  tags: string[];
}

export enum ProjectStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export enum Phase {
  STRATEGIST = 0,
  RESEARCHER = 1,
  ARCHITECT = 2,
  VISUAL = 3,
  VALIDATOR = 4,
}

export interface Agent {
  id: string;
  name: string;
  type: AgentType;
  phase: Phase;
  description: string;
  status: AgentStatus;
  capabilities: string[];
  outputs: string[];
}

export enum AgentType {
  MACRO = 'macro',
  SUB = 'sub',
}

export enum AgentStatus {
  IDLE = 'idle',
  WORKING = 'working',
  COMPLETED = 'completed',
  ERROR = 'error',
}

export interface Gateway {
  id: string;
  phase: Phase;
  name: string;
  description: string;
  status: GatewayStatus;
  approvedBy?: string;
  approvedAt?: string;
  comments?: string;
}

export enum GatewayStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export interface Template {
  id: string;
  name: string;
  phase: Phase;
  agent: string;
  description: string;
  content: string;
  variables: string[];
}

export interface Report {
  id: string;
  projectId: string;
  phase: Phase;
  agent: string;
  title: string;
  content: string;
  format: ReportFormat;
  createdAt: string;
  downloadUrl?: string;
}

export enum ReportFormat {
  PDF = 'pdf',
  DOCX = 'docx',
  MD = 'md',
  HTML = 'html',
}

export interface FileUpload {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
  projectId: string;
  phase?: Phase;
  url: string;
}

export interface AgentLog {
  id: string;
  agentId: string;
  projectId: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
}

export enum LogLevel {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

// Tipos de resposta da API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Made with Bob
