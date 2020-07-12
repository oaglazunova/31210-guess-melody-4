import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src} = this.props;

    const audio = this._audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => this.setState({
      isPlaying: false,
    });

    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime,
    });
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  render() {
    const {onPlayButtonClick} = this.props;
    const {isPlaying, isLoading} = this.state;

    return (
      <>
        <button type="button"
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          disabled={isLoading}
          onClick={() => {
            this.setState({isPlaying: !isPlaying});
            onPlayButtonClick();
          }} />

        <div className="track__status">
          <audio ref={this._audioRef} />
        </div>
      </>
    );
  }

  componentDidUpdate() {
    const {isPlaying} = this.state;

    const audio = this._audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
