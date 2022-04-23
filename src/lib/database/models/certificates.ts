import { model, models, Schema, Types } from 'mongoose'
import { CertificatesProps } from 'src/types'

const certificateSchema = new Schema<CertificatesProps>({
  _id: Types.ObjectId,
  title: String,
  company: String,
  time: String,
})

export default models.Certificate || model('Certificate', certificateSchema)
