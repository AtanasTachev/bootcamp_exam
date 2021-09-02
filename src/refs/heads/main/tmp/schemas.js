const schemas = {
   createJob: {
      title: String,
      description: String
},
    updateJob: {
    title: String,
    description: String
   },
    job: {
    _id: String,
    title: String,
    description: String
    },
    detailedJob: [{
        allOf: {
            candidates:[],
            jobs: [],
            jobCandidatesList:[],
            candidatesList: [],
            candidate: {
                firstName: String,
                lastName: String,
                email: String
            },
            candidateCreate: {
                firstName: String,
                lastName: String,
                email: String
            },
            candidateUpdate: {
                firstName: String,
                lastName: String,
                email: String
            }
        },
        interview: {
            _id: String,
            jobId: String,
            candidateId: String,
            slot: Number
        },
        interviewUpdate: {
            jobId: String,
            candidateId: String,
            slot: Number,
        },
        jobInterviewsList: []
    }]
}
