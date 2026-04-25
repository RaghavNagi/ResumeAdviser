const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController = require("../controller/interview.controller")
const upload = require("../middlewares/file.middleware")

const interviewRouter = express.Router()

/**
 * @route POST /api/interview
 * @description Generate new interview report on the basis of user self description, resume pdf and job description
 * @access PRIVATE
 */
interviewRouter.post("/",authMiddleware.authUser, upload.single("resume") ,interviewController.generateInterviewReportController)


/**
 * @route GET /api/interview:InterviewId
 * @description get interview report by Interview id
 * @access private
 */
interviewRouter.get("/report/:interviewId",authMiddleware.authUser, interviewController.getInterviewReportByIdController)


/**
 * @route GET /api/interview
 * @description get all interview report of logged in user
 * @access private
 */
interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController)


module.exports = interviewRouter