module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  TodoItem.associate = (models) => {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoID',
      onDelete: 'CASCADE',
    });
  };
  
  return TodoItem;
};