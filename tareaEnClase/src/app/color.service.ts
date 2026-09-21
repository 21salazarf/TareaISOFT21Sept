import { Injectable, computed, signal } from '@angular/core';

export interface Rgb { r: number; g: number; b: number; }

/** Estado compartido: el color RGB actual. */
@Injectable({ providedIn: 'root' })
export class ColorService {
    readonly rgb = signal<Rgb>({ r: 0, g: 0, b: 0 });

    readonly css = computed(() => {
        const { r, g, b } = this.rgb();
        return `rgb(${r}, ${g}, ${b})`;
    });

    /** Color actual en formato hexadecimal, p. ej. "#FF8800". */
    readonly hex = computed(() => {
        const { r, g, b } = this.rgb();
        const h = (n: number) => n.toString(16).padStart(2, '0');
        return `#${h(r)}${h(g)}${h(b)}`.toUpperCase();
    });

    /** Promedio simple de R, G, B. */
    readonly gray = computed(() => {
        const { r, g, b } = this.rgb();
        return Math.round((r + g + b) / 3);
    });

    readonly grayCss = computed(() => `rgb(${this.gray()}, ${this.gray()}, ${this.gray()})`);

    setChannel(channel: keyof Rgb, value: number): void {
        this.rgb.update((c) => ({ ...c, [channel]: clamp(value) }));
    }

    setRgb(rgb: Rgb): void {
        this.rgb.set({ r: clamp(rgb.r), g: clamp(rgb.g), b: clamp(rgb.b) });
    }
}

export function clamp(n: number): number {
    if (!Number.isFinite(n)) return 0;
    return Math.min(255, Math.max(0, Math.round(n)));
}

/** Convierte "#RRGGBB", "RRGGBB", "#RGB" o "RGB" a Rgb; null si es inválido. */
export function parseHex(text: string): Rgb | null {
    let h = text.trim().replace(/^#/, '');
    if (/^[0-9a-fA-F]{3}$/.test(h)) h = h.split('').map((c) => c + c).join('');
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
    return {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16),
    };
}