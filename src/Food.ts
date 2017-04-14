import { IPoint } from './interfaces/IPoint';
import { IGameObject } from './interfaces/IGameObject';

export class Food implements IPoint, IGameObject {
    private static readonly coordRange: number = 500;
    private static readonly sizeRange: number = 30;

    public readonly x: number;
    public readonly y: number;
    public readonly size: number;
    public readonly element: HTMLElement;
    public readonly id: string;

    constructor(id: string) {
        this.x = this.generateRandom(Food.coordRange - Food.sizeRange);
        this.y = this.generateRandom(Food.coordRange - Food.sizeRange);
        this.size = this.generateRandom(Food.sizeRange); 
        this.id = id;
        this.element = this.createElement(this.id);
    }

    generateRandom(range: number): number {
        return Math.round(Math.random() * range);
    }

    createElement(id: string): HTMLElement {
        const element = document.createElement('div');
        element.id = id;
        element.className = 'food';
        element.style.left = `${this.x}px`;
        element.style.top = `${this.y}px`;
        element.style.width = `${this.size}px`;
        element.style.height = `${this.size}px`;

        return element;
    }
}