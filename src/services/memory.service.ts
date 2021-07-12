import MemoryRepository from "../";
import AddMemory from "../";
import UpdateMemory from "../";

class MemoryService {
  memoryRepository: MemoryRepository;

  constructor() {
    this.memoryRepository = new MemoryRepository();
  }