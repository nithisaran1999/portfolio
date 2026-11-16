FROM ghcr.io/bare-devcontainer/bun:1-trixie

USER root

RUN mkdir -p /home/dev/.config/opencode \
    /home/dev/.local/share/opencode \
    /home/dev/.local/state/opencode \
    && chown -R dev:dev \
       /home/dev/.config \
       /home/dev/.local

USER dev