export type TaskProps = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt?: Date;
};

export class Task {
  private readonly id: string;
  private readonly title: string;
  private readonly body: string;
  private readonly createdAt: Date;
  private readonly updatedAt?: Date;
  constructor(props: TaskProps) {
    this.id = props.id;
    this.title = props.title;
    this.body = props.body;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
