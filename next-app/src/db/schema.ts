import { relations } from "drizzle-orm";
import { pgTable, serial, varchar, text, timestamp, boolean, integer, uniqueIndex } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').unique().notNull(),
  username: text('username').unique().notNull(),
  password: text('password').notNull(),
  firstName: text('firstName'),
  lastName: text('lastName'),
  contactNumber: text('contactNumber'),
  verifyCode: text('verifyCode'),
  verifyCodeExpiry: timestamp('verifyCodeExpiry').notNull(),
  isVerified: boolean('isVerified').default(false),
  image: text('image')
}, (table) => ({
  emailIdx: uniqueIndex('email_idx').on(table.email),
  usernameIdx: uniqueIndex('username_idx').on(table.username)
}));

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url").notNull(),
  userId: integer("user_id").references(() => users.id)
});

export const  feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").references(() => projects.id).notNull(),
  userName: text("user_name"),
  userEmail: text("user_email"),
  message: text("message"),
  rating: integer("rating"),
});

export const subscriptions = pgTable("subscriptions", {
  id: varchar('id').primaryKey(),
  userId: integer('userId').references(() => users.id).notNull(),
  active: boolean('active').default(false).notNull(),
  expiresOn: timestamp('expiresOn'),
  startDate: timestamp('startDate').defaultNow().notNull()
});

export const Transactions = pgTable('transactions', {
  id: serial('id').primaryKey(),
  subscriptionId: varchar('subscriptionId').references(() => subscriptions.id).notNull(),
  transactionId: varchar('transactionId').unique().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Relations
// Make sure you have ALL these exports at the end of your schema.ts file

export const usersRelation = relations(users, ({ many }) => ({
  projects: many(projects),
  subscriptions: many(subscriptions)
}));

export const projectsRelation = relations(projects, ({ one, many }) => ({
  user: one(users, {
    fields: [projects.userId],
    references: [users.id],
  }),
  feedbacks: many(feedbacks)
}));

export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields: [feedbacks.projectId],
    references: [projects.id],
  }),
}));

export const userSubscriptionRelations = relations(subscriptions, ({ one, many }) => ({
  user: one(users, {
    fields: [subscriptions.userId],
    references: [users.id]
  }),
  transactions: many(Transactions)
}));

export const transactionsRelations = relations(Transactions, ({ one }) => ({
  subscription: one(subscriptions, {
    fields: [Transactions.subscriptionId],
    references: [subscriptions.id]
  })
}));