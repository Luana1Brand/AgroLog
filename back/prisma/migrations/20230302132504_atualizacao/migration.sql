-- CreateTable
CREATE TABLE `Funcionarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Funcionarios_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Frota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca_carro` VARCHAR(191) NOT NULL,
    `placa_carro` VARCHAR(191) NOT NULL,
    `funcao` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `gastos_totais` DOUBLE NOT NULL,

    UNIQUE INDEX `Frota_placa_carro_key`(`placa_carro`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Operacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `id_carro` INTEGER NOT NULL,
    `id_responsavel` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manutencao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `id_carro` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Operacoes` ADD CONSTRAINT `Operacoes_id_carro_fkey` FOREIGN KEY (`id_carro`) REFERENCES `Frota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Operacoes` ADD CONSTRAINT `Operacoes_id_responsavel_fkey` FOREIGN KEY (`id_responsavel`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manutencao` ADD CONSTRAINT `Manutencao_id_carro_fkey` FOREIGN KEY (`id_carro`) REFERENCES `Frota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
