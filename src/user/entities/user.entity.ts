import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';
import { Score } from '../../score/entities/score.entity';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@OneToMany(() => Score, (score) => score.user)
	scores: Score[];

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}