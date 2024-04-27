const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: {
        String
    },
    party: {
        String,
        required: true
    },
    age: {
        Number,
        required: true
    },


    votes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            votedAt: {
                type: Date,
                default: Date.now()
            }
        },
        count: {
            Number,
            default: 0
        }
    }
    ],
    password: {
        String,
        required: true
    },

    isVoted: {
        type: Boolean,
        default: false
    }
})

const Candidate = new mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;