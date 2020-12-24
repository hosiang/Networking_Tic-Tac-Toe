attribute vec4 vPosition;

uniform mat4 uMvpMatrix;

void main()
{
	gl_Position = uMvpMatrix * vPosition;
}
