import mongoose, { Schema, model, models } from 'mongoose';

const SubscriptionSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  billingCycle: { type: String, enum: ['monthly', 'yearly'], default: 'monthly' },
  nextBillingDate: { type: Date, required: true },
  userId: { type: String, required: true }, // For NextAuth integration
}, { timestamps: true });

export default models.Subscription || model('Subscription', SubscriptionSchema);