/* Schéma de données */
use nourrain_db;

CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_team_id INT,
  user_role ENUM('team_member', 'team_admin') NOT NULL,
  user_credits_amount DECIMAL(10, 2)
);

CREATE TABLE Team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(255) NOT NULL,
    team_credits_amount DECIMAL(10, 2),
    min_contribution DECIMAL(10, 2),
    max_amount DECIMAL(10, 2),
    current_balance DECIMAL(10, 2),
    managed_by INT,
    partner_id INT
);

CREATE TABLE Transaction(
    id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_date TIMESTAMP,
    transaction_amount DECIMAL(10, 2),
    credited_by INT,
    partner_id INT
);

CREATE TABLE Partner(
    id INT AUTO_INCREMENT PRIMARY KEY,
    partner_name VARCHAR(255),
    partner_required_credits_by_person DECIMAL(10, 2)
);

ALTER TABLE User
ADD FOREIGN KEY (user_team_id) REFERENCES Team(id);

ALTER TABLE Team
ADD FOREIGN KEY (managed_by) REFERENCES User(id);

ALTER TABLE Transaction
ADD FOREIGN KEY (credited_by) REFERENCES User(id);

ALTER TABLE Transaction
ADD FOREIGN KEY (partner_id) REFERENCES Partner(id);

ALTER TABLE Team
ADD FOREIGN KEY (partner_id) REFERENCES Partner(id);