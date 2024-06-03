const mongoose = require('mongoose');
const validator = require('validator');

const LeadSchema = mongoose.Schema({
    name: { type: String, required: true },
    tel: { type: String, required: true },
    email: { type: String, required: true },
    typeLead: { type: String, required: true },
    uf: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: String, required: true },
    material: { type: String, required: true },
    typeOfMaterial: { type: String, required: true },
    process: { type: String, required: true },
    colaborator: { type: String, required: true }

});
const LeadModel = mongoose.model("Leads", LeadSchema);

class Leads {
    constructor(body, session) {
        this.body = body;
        this.errors = [];
        this.lead = null;
        this.session = session;
    }
    async createLead() {
        try {
            if (!validator.isEmail(this.body.email)) this.errors.push("Email Inválido !");
            this.lead = await LeadModel.create(this.body);
        } catch (e) {
            throw new Error(e);
        }

    }
    async edit(id) {
        this.lead = await LeadModel.findByIdAndUpdate(id, this.body, { new: true });
    }
    async getAllNumberOfLeadsRegisterForUser() {
        try {
            let leads = await LeadModel.find({ colaborator: this.session.nome });
            return leads.length;
        } catch (e) {
            throw new Error(e);
        }
    }
    async getAllEmails() {
        try {
            const leads = await LeadModel.find({ colaborator: this.session.nome });
            let emails = leads.filter((lead) => {
                if (lead.email !== undefined || lead.email !== null || lead.email !== " ") return lead.email
            }
            )
            return emails.length;
        } catch (e) {
            throw new Error(e);
        }
    }
    async getAllLeadsInThisMonth() {
        const leads = await LeadModel.find({ colaborator: this.session.nome });
        const dateOfSoftware = new Date();
        const actualMonth = dateOfSoftware.getMonth();
        const leadsRegisterInThiseMonth = leads.filter((lead) => {
            let LeadDate = new Date(lead.date);
            if (actualMonth == LeadDate.getMonth()) {
                return lead.date;
            }
        });
        return leadsRegisterInThiseMonth.length;

    }
    async getLeads() {
        try {
            const leads = await LeadModel.find();
            return leads;
        } catch (e) {
            throw new Error(e);
        }
    }
    async getLeadsById(id) {
        const lead = await LeadModel.findById(id);
        return lead;
    }
    async deleteLead(id) {
        const deleted = await LeadModel.findByIdAndDelete({ _id: id });
        return deleted;
    }
    async getLeadsRegisterToday() {
        try {
            const leadsOfUser = await LeadModel.find({ colaborator: this.session.nome });
            let myDate = new Date(); 
            let formated  = this.dateFormatter(myDate) 
            console.log(formated); 
            let filtredLead = leadsOfUser.filter((lead) => { 
             let formatedDate = this.dateFormatter(lead.date);   
             console.log(formatedDate)
              if(formated === formatedDate) return lead; 
             });
            return filtredLead.length;
        } catch (e) {
            throw new Error(e);
        }

    } 
    dateFormatter(date) {
       let defaultDate = new Date(date); 
       let day = (defaultDate.getDate()<10)? `0${defaultDate.getDate()}`:defaultDate.getDate(); 
       let month = (defaultDate.getMonth() < 10)? `0${defaultDate.getMonth()}`:defaultDate.getMonth(); 
       let year = defaultDate.getFullYear(); 
       let formatedDate = `${day}-${month}-${year}`; 
       return formatedDate;   
    }



}

exports.Leads = Leads;
