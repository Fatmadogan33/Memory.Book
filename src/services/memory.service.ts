import MemoryRepository from "../repository/memory.repository";
//import AddMemory from "../";
//import UpdateMemory from "../";

export class MemoryService {

    async getMemory(id: number): Promise<getAllMemories> {
        return new Promise((resolve, reject) => {
            this.MemoryRepository.getMemory(id)
            .then((res) => {
                return resolve(res);
            })
            .catch((err)=>{
            reject(err);
            });
        });
    }

    async addMemory(memory: AddMemory): Promise<AddMemory> {
        return new Promise((resolve, reject) => {
            this.MemoryRepository.addMemory(memory)
            .then((res) => {
                return resolve(res);
            })
            .catch((err)=>{
            reject(err);
            });
        });
    }
    
    async updateMemory(update: updateMemory): Promise<updateMemory> {
        return new Promise((resolve, reject) => {
            this.MemoryRepository.updateMemory(memory)
            .then((res) => {
                return resolve(res);
            })
            .catch((err)=>{
            reject(err);
            });
        });
    }


    async deleteMemory(id: number): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            this.MemoryRepository.deleteMemory(id)
            .then((res) => {
                return resolve(res);
                })
                .catch((err)=>{
                    reject(err);
                });
        });
    }



    
}