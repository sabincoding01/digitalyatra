import { Request,Response } from "express"
import sequelize from "../../database/connection"


class InstituteController{
    static async createInstitute(req:Request,res:Response){

        const{instituteName, instituteEmail , institutePhoneNumber ,institueAddress} = req.body

        const instituteVatNo =req.body.instituteVatNo || null
        const institutePanVatNo = req.body.institutePanNo || null

        if(!instituteName || !instituteEmail || !institueAddress || ! institutePhoneNumber){
            res.status(400).json({
                message :" please provide insitituteName , instituteEmail, institutePhoneNumber, instituteAddress"
            })

            return
        }

        //aayo vane - institue create garnu paryo --> institute_123123 , course_123132
        await sequelize.query(`CREATE TABLE institute (
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            instituteName VARCHAR(255) NOT NULL,
            instituteEmail VARCHAR(255) NOT NULL,
            institutePhoneNumber VARCHAR(255) NOT NULL,
            instituteAddress VARCHAR(255), NOT NULL,
            instututeVatNo VARCHAR(255),
            institutePanNo VARCHAR(255),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            

            
            )`,)

            res.status(400).json({
                message:"Institute created"
            })

    }
}

export default InstituteController  