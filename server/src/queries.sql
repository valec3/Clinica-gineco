-- users de ejemplo
INSERT INTO users (name, email, password, role, createdAt, updatedAt) 
VALUES ('Juanito Perez', 'Juanito@gmail.com', '1234', 'user', NOW(), NOW());

-- Insertar clínicas
INSERT INTO clinics (name, phone, address, createdAt, updatedAt) 
VALUES ('Clínica Central', '123-456-7890', 'Av. Principal 123, Ciudad', NOW(), NOW());
INSERT INTO clinics (name, phone, address, createdAt, updatedAt) 
VALUES ('Clínica Norte', '987-654-3210', 'Calle Norte 456, Ciudad', NOW(), NOW());
INSERT INTO clinics (name, phone, address, createdAt, updatedAt) 
VALUES ('Clínica Sur', '555-555-5555', 'Avenida Sur 789, Ciudad', NOW(), NOW());
INSERT INTO clinics (name, phone, address, createdAt, updatedAt) 
VALUES ('Clínica Este', '111-222-3333', 'Boulevard Este 101, Ciudad', NOW(), NOW());
INSERT INTO clinics (name, phone, address, createdAt, updatedAt) 
VALUES ('Clínica Oeste', '444-666-8888', 'Ruta Oeste 202, Ciudad', NOW(), NOW());

-- Insertar doctores
INSERT INTO users (name, email, phone, role, password, createdAt, updatedAt) 
VALUES 
('Juan Pérez', 'juan.perez@clinic.com', '111-111-1111', 'admin', 'password123', NOW(), NOW()),
('Maria López', 'maria.lopez@clinic.com', '222-222-2222', 'admin', 'password123', NOW(), NOW()),
('Carlos García', 'carlos.garcia@clinic.com', '333-333-3333', 'admin', 'password123', NOW(), NOW()),
('Ana Martínez', 'ana.martinez@clinic.com', '444-444-4444', 'admin', 'password123', NOW(), NOW()),
('Pedro Rodríguez', 'pedro.rodriguez@clinic.com', '555-555-5555', 'admin', 'password123', NOW(), NOW());

INSERT INTO doctors (speciality, clinicId, userId, createdAt, updatedAt)
VALUES 
('Ginecología', 1, 1, NOW(), NOW()),
('Obstetricia', 2, 2, NOW(), NOW()),
('Ginecología', 3, 3, NOW(), NOW()),
('Ginecología', 4, 4, NOW(), NOW()),
('Obstetricia', 5, 5, NOW(), NOW());
