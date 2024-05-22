-- users de ejemplo
INSERT INTO users (name, email, password, role) VALUES ('Juanito Perez', 'Juanito@gmail.com', '1234', 'user');

-- Insertar clínicas
INSERT INTO clinics (name, phone, address) VALUES ('Clínica Central', '123-456-7890', 'Av. Principal 123, Ciudad');
INSERT INTO clinics (name, phone, address) VALUES ('Clínica Norte', '987-654-3210', 'Calle Norte 456, Ciudad');
INSERT INTO clinics (name, phone, address) VALUES ('Clínica Sur', '555-555-5555', 'Avenida Sur 789, Ciudad');
INSERT INTO clinics (name, phone, address) VALUES ('Clínica Este', '111-222-3333', 'Boulevard Este 101, Ciudad');
INSERT INTO clinics (name, phone, address) VALUES ('Clínica Oeste', '444-666-8888', 'Ruta Oeste 202, Ciudad');

-- Insertar doctores
INSERT INTO users (name, email, phone, role, password) VALUES 
('Juan Pérez', 'juan.perez@clinic.com', '111-111-1111', 'admin', 'password123'),
('Maria López', 'maria.lopez@clinic.com', '222-222-2222', 'admin', 'password123'),
('Carlos García', 'carlos.garcia@clinic.com', '333-333-3333', 'admin', 'password123'),
('Ana Martínez', 'ana.martinez@clinic.com', '444-444-4444', 'admin', 'password123'),
('Pedro Rodríguez', 'pedro.rodriguez@clinic.com', '555-555-5555', 'admin', 'password123');

INSERT INTO doctors (speciality, clinicId, userId) VALUES 
('Ginecología', 1, 1),
('Obstetricia', 2, 2),
('Ginecología', 3, 3),
('Ginecología', 4, 4),
('Obstetricia', 5, 5);