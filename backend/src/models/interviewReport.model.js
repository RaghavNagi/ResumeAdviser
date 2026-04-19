const mongoose = require('mongoose');

/**
 *  - job description: String
 *  - resume text: String
 *  - self description: String
 * 
 * 
 *  - matchScore: Number
 * 
 * 
 * 
 *  - Technical ques : 
 *      [{
 *          question : "",
 *          interviewer's intension : ""
 *          answer : ""
 *      }]
 *  - Behavior ques :
 *      [{
 *          question : "",
 *          interviewer's intension : ""
 *          answer : ""
 *      }]
 *  - Skill gap :
 *      [{
 *          skill : "",
 *          severity : 
 *          {
 *              type: string,
 *              enum: [low, medium, high]            
 *          }
 *      }]
 *  - preparation plan :
 *      [{
 *          day : Number,
 *          focus : String,
 *          tasks : [String]
 *      }]
 */

const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Technical Question is required"]
    },
    intension: {
        type: String,
        required: [true, "Intension is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is required"]
    }
}, {
    _id: false
    // because we are not storing this schema
})

const behaviorQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Technical Question is required"]
    },
    intension: {
        type: String,
        required: [true, "Intension is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is required"]
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill :{
        type: String,
        required: [true, "Skill is required"]
    },
    severity:{
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "severity is required"]
    }
})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type: Number,
        required: [true, "day is required"]
    },
    focus:{
        type: String,
        required: [true, "focus is required"]
    },
    tasks: {
        type: [{
            type: String,
            required: [true, "task is required"]
        }]
    }
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"]
    },
    resume: {
        type: String
    },
    selfDescription:  {
        type: String
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestion: [technicalQuestionSchema],
    behaviorQuestion: [behaviorQuestionSchema],
    skillGap: [skillGapSchema],
    preparationPlan: [preparationPlanSchema]
},{
    timestamps: true
})


const interviewReportModel = mongoose.Model("interviewReport", interviewReportSchema)

module.exports = interviewReportModel