export class CheckedViewModel<T> {
    public isChecked: boolean = false;
    public isEditing: boolean = false;

    constructor(public model: T) {
        if (!model) throw new Error("model must be provided")
    }
}
