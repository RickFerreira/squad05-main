import VideoService from '../../services/VideoService';
import IndexBase from '../IndexBase';

class VideoIndexStore extends IndexBase {
  constructor() {
    super(VideoService);
  }
}

export default VideoIndexStore;
