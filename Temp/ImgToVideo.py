import cv2
import os

# 图片文件夹路径
image_folder = 'F:\\New folder\\photo'
# 输出视频文件路径
video_output_path = 'output_video.mp4'

# 视频的帧率
fps = 1  # 每秒1帧，因为要生成时长为10秒的视频

# 获取所有图片文件，并按修改时间排序
images = [(os.path.join(image_folder, img), os.path.getmtime(os.path.join(image_folder, img)))
          for img in os.listdir(image_folder) if img.endswith(('.png', '.jpg', '.jpeg'))]
images.sort(key=lambda x: x[1])

# 读取第一张图片来获取视频的尺寸
frame = cv2.imread(images[0][0])
height, width, layers = frame.shape

# 定义视频编码器和创建VideoWriter对象
fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # 视频编码器
out = cv2.VideoWriter(video_output_path, fourcc, fps, (width, height))

# 将图片写入视频
for image_path, _ in images:
    frame = cv2.imread(image_path)
    out.write(frame)

# 释放VideoWriter对象
out.release()

print(f"Video has been saved to {video_output_path}")



# import cv2
# import os
#
#
# def images_to_video(image_folder, video_path, target_duration):
#     # 获取图片文件名并排序
#     images = [img for img in os.listdir(image_folder) if img.endswith(".png") or img.endswith(".jpg")]
#     images.sort()
#
#     # 打印图片列表以进行调试
#     print(f"Found images: {images}")
#
#     if not images:
#         print("No images found in the folder.")
#         return
#
#     # 读取第一张图片以获取帧的宽度和高度
#     frame = cv2.imread(os.path.join(image_folder, images[0]))
#     height, width, layers = frame.shape
#
#     # 计算需要的帧数
#     fps = 30  # 固定帧率为30
#     total_frames = target_duration * fps  # 目标时长的总帧数
#     num_images = len(images)
#
#     # 确保足够的帧数，重复图片
#     frames_per_image = total_frames // num_images
#     remaining_frames = total_frames % num_images
#
#     # 定义视频编解码器并创建 VideoWriter 对象
#     fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # 使用 'mp4v' 编码器生成 MP4 文件
#     video = cv2.VideoWriter(video_path, fourcc, fps, (width, height))  # 固定fps为30
#
#     for image in images:
#         img = cv2.imread(os.path.join(image_folder, image))
#         for _ in range(frames_per_image):
#             video.write(img)
#
#     # 如果还有剩余帧，添加到视频中
#     for i in range(remaining_frames):
#         video.write(cv2.imread(os.path.join(image_folder, images[i % num_images])))
#
#     video.release()
#     cv2.destroyAllWindows()
#
#
# # 使用示例
# image_folder = 'F:\\New folder\\photo'
# video_path = 'output_video.mp4'
# target_duration = 10  # 目标时长10秒
#
# images_to_video(image_folder, video_path, target_duration)
