const CommentItem = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      {/* Profile Pic - Name - Date */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200" />
        <div className="flex flex-col">
          <span className="text-lg">اسم المستخدم</span>
          <span className="text-s text-gray-400">قبل 10 دقائق</span>
        </div>
      </div>
      <p>
        محتوى التعليق محتوى التعليق محتوى التعليق محتوى محتوى التعليق محتوى
        التعليق محتوى التعليق محتوى التعليق محتوى التعليق محتوى التعليق محتوى
        التعليق محتوى التعليق
      </p>
    </div>
  );
};

export default CommentItem;
