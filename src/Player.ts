import { IPoint } from './interfaces/IPoint';
import { IGameObject } from './interfaces/IGameObject';
import { Game } from './Game';

export class Player implements IPoint, IGameObject {
    private static readonly startingSpeed: number = 3;
    public static readonly startingSize: number = 10;
    private static readonly startingCoord: number = (500 / 2) - Player.startingSize;

    public x: number;
    public y: number;
    public size: number;
    public speed: number;
    public element: HTMLElement;
    private collisionCheck: () => void;

    constructor(collisionCallback: () => void) {
        this.x = this.y = Player.startingCoord;
        this.size = Player.startingSize;
        this.speed = Player.startingSpeed;
        this.element = this.createElement('player_1');
        this.collisionCheck = collisionCallback;
        this.createMovementListeners();
    }

    createMovementListeners(): void {
        document.addEventListener('keydown', this.handleMovement.bind(this));
    }

    createElement(id: string): HTMLElement {
        const element = document.createElement('div');
        element.id = id;
        element.className = 'player';
        element.style.left = `${this.x}px`;
        element.style.top = `${this.y}px`;
        element.style.width = `${this.size}px`;
        element.style.height = `${this.size}px`;

        return element;
    }

    handleMovement(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case 87: // W
                this.move(0, -this.speed);
                break;
            case 83: // S
                this.move(0, this.speed);
                break;
            case 68: // D
                this.move(this.speed, 0);
                break;
            case 65: // A
                this.move(-this.speed, 0);
                break;
        }
    }

    move(dx: number, dy: number): void {
        if (this.x + this.size + dx <= Game.gameboardSize &&
            this.x + dx >= 0) {
            this.x += dx;
        }
        if (this.y + this.size + dy <= Game.gameboardSize &&
            this.y + dy >= 0) {
            this.y += dy;
        }

        this.repositionElement();
        this.collisionCheck();
    }

    repositionElement(): void {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    resizeElement(): void {
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
    }

    // There is a known bug with this logic. If on the rightmost of bottommost side
    // and you eat something and grow past the bounds of the gameboard, you won't
    // be able to move in the opposite direction.
    eat(size: number): boolean {
        if (size <= this.size) {
            this.size += size * 0.3;
            this.speed -= this.speed * 0.05;
            this.resizeElement();
            return true;
        }

        return false;
    }
}