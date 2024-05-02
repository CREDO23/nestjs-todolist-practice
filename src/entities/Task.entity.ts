export class Task {
  id: number;
  title: string;
  body: string;
  done: boolean;

  constructor(id: number, title: string, body: string) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.done = false;
  }
}
