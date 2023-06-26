const mongoose = require ('mongoose')

const newsItemSchema = new mongoose.Schema ({
    title:{type: String, required:''},
    description:{type: String, required:''},
    content:{type: String, required: ''},
    postedBy:{type: String, required:''},
},
{
    timestamps : true,
}
)

const NewsItemModel = mongoose.model('sachinitems', newsItemSchema)

module.exports = NewsItemModel
