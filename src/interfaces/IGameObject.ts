export interface IGameObject {
    size: number;
    element: HTMLElement;

    createElement(id: string): HTMLElement;
}