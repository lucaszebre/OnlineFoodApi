/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity'
@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}
  async create(comment: Partial<Comment>): Promise<Comment> {
    const newuser = this.commentRepository.create(comment);
    return this.commentRepository.save(newuser);
  }

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }
  
  async findAllCommentUser(user_id:number): Promise<Comment[]> {
    return this.commentRepository.find({where:{user_id}});
  }

  async findOne(id: number): Promise<Comment> {
    return this.commentRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<Comment>): Promise<Comment> {
    await this.commentRepository.update(id, user);
    return this.commentRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
