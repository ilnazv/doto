import { IHero } from "./Dashboard";

const baseApiUrl = "https://api.opendota.com";

export const heroesService = {
    loadHeroStats: async () => {
        const url = `${baseApiUrl}/api/heroStats`;
        const response = await fetch(url);
        const heroes = await response.json();
        return heroes.map((x: any) => ({
            name: x.localized_name,
            imageUrl: baseApiUrl + x.img,
            iconUrl: baseApiUrl + x.icon,
            attack_type: x.attack_type
        } as IHero));
    }
}
