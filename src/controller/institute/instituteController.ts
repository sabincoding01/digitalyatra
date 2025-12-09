import { Request, Response } from "express";
import sequelize from "../../database/connection";
import generateRandomInstituteNumber from "../../services/generateRandomInstituteNumber";

class InstituteController {
    static async createInstitute(req: Request, res: Response) {
        const { instituteName, instituteEmail, institutePhoneNumber, instituteAddress } = req.body;

        const instituteVatNo = req.body.instituteVatNo || null;
        const institutePanNo = req.body.institutePanNo || null;

        if (!instituteName || !instituteEmail || !institutePhoneNumber || !instituteAddress) {
            return res.status(400).json({
                message: "Please provide instituteName, instituteEmail, institutePhoneNumber, instituteAddress"
            });
        }

        const instituteNumber = generateRandomInstituteNumber()

        await sequelize.query(`
            CREATE TABLE IF NOT EXISTS institute_${instituteNumber} (
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                instituteName VARCHAR(255) NOT NULL,
                instituteEmail VARCHAR(255) NOT NULL,
                institutePhoneNumber VARCHAR(255) NOT NULL,
                instituteAddress VARCHAR(255) NOT NULL,
                instituteVatNo VARCHAR(255),
                institutePanNo VARCHAR(255),
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `);

       await sequelize.query(
    `INSERT INTO institute_${instituteNumber}
    (instituteName, instituteEmail, institutePhoneNumber, instituteAddress, instituteVatNo, institutePanNo)
    VALUES (?, ?, ?, ?, ?, ?)`,
    {
        replacements: [
            instituteName,
            instituteEmail,
            institutePhoneNumber,
            instituteAddress,
            instituteVatNo,
            institutePanNo]
        })

        return res.status(200).json({
            message: "Institute created"
        });
    }
}

export default InstituteController;
