#version 330 core

layout (Location = 0) in vec4 vPosition;
layout (Location = 1) in vec2 vTexCoord;

out vec2 fTexCoord;

uniform mat4 uMvpMatrix;

void main()
{
	fTexCoord = vTexCoord;
	gl_Position = uMvpMatrix * vPosition;
}
