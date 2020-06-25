import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDatabace implements InMemoryDbService {
    createDb(){
        const categories = [
            { id: 1, name: 'Maria1', description: 'Plano 0001' },
            { id: 2, name: 'Maria2', description: 'Plano 0002' },
            { id: 3, name: 'Maria3', description: 'Plano 0003' },
            { id: 4, name: 'Maria4', description: 'Plano 0004' },
            { id: 5, name: 'Maria5', description: 'Plano 0005' }
        ];

        return { categories }
    }
}