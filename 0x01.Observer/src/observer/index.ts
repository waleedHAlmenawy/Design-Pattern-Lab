type Observer<T> = (data: T) => void;

export class Observable<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>) {
    this.observers.push(observer);

    return () => {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
  }

  unsubscribeAll() {
    this.observers = [];
  }

  notify(data: T) {
    this.observers.forEach((obs) => obs(data));
  }
}