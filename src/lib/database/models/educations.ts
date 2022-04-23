import { model, models, Schema, Types } from 'mongoose'
import { EducationProps } from 'src/types'

const educationSchema = new Schema<EducationProps>({
  _id: Types.ObjectId,
  title: String,
  time: String,
  description: String,
})

export default models.Education || model('Education', educationSchema)
