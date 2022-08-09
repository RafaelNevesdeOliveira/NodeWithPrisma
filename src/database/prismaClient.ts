import { PrismaClient } from "@prisma/client";

// camada de conexao com DB
const prismaClient = new PrismaClient();

export { prismaClient };