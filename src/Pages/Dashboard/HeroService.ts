import { IHero } from "./Dashboard";

export const heroesService = {
    loadHeroStats: async () => {
        const url = 'https://api.opendota.com/api/heroStats';
        const response = await fetch(url);
        const heroes = await response.json();
        return heroes.map((x: any) => ({
            name: x.localized_name,
            imageUrl: x.img,
            iconUrl: x.icon,
            attack_type: x.attack_type
        } as IHero));
    }
}
