import { After, AstNode, And, Before, CharClass, Expr, Match, Maybe, Or, Repeat } from '../pattern';
import { space } from '../astUtils';

export class Expressions extends AstNode<Expressions> {
  moduleTop: boolean;
}
