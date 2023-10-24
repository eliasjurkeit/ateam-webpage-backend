import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TeamMember {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    picture: string

    @Column()
    department: string
}