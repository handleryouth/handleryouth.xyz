import { model, models, Schema, Types } from 'mongoose';
import { CertificatesProps } from 'types';

const certificateSchema = new Schema<CertificatesProps>({
  _id: Types.ObjectId,
  title: String,
  company: String,
  time: String,
});

export default models.Certificate || model('Certificate', certificateSchema);
